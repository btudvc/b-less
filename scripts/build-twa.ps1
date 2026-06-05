$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$androidDir = Join-Path $root "android"
$propsPath = Join-Path $androidDir "signing.properties"

if (!(Test-Path $propsPath)) {
  throw "Missing android/signing.properties. Generate a signing key before building."
}

$props = @{}
Get-Content $propsPath | ForEach-Object {
  if ($_ -match "^\s*([^#=]+)=(.*)$") {
    $props[$matches[1].Trim()] = $matches[2].Trim()
  }
}

if (!$props.storePassword -or !$props.keyPassword -or !$props.keyAlias -or !$props.storeFile) {
  throw "android/signing.properties must contain storePassword, keyPassword, keyAlias, and storeFile."
}

$env:BUBBLEWRAP_KEYSTORE_PASSWORD = $props.storePassword
$env:BUBBLEWRAP_KEY_PASSWORD = $props.keyPassword
$keyPath = Join-Path $androidDir $props.storeFile

Push-Location $root
try {
  npx.cmd @bubblewrap/cli build --manifest="./android" --signingKeyPath="$keyPath" --signingKeyAlias="$($props.keyAlias)"
  if ($LASTEXITCODE -ne 0) {
    throw "Bubblewrap build failed with exit code $LASTEXITCODE."
  }
}
finally {
  Pop-Location
  Remove-Item Env:BUBBLEWRAP_KEYSTORE_PASSWORD -ErrorAction SilentlyContinue
  Remove-Item Env:BUBBLEWRAP_KEY_PASSWORD -ErrorAction SilentlyContinue
}
