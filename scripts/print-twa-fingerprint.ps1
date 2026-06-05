$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$androidDir = Join-Path $root "android"
$propsPath = Join-Path $androidDir "signing.properties"

if (!(Test-Path $propsPath)) {
  throw "Missing android/signing.properties."
}

$props = @{}
Get-Content $propsPath | ForEach-Object {
  if ($_ -match "^\s*([^#=]+)=(.*)$") {
    $props[$matches[1].Trim()] = $matches[2].Trim()
  }
}

$keyPath = Join-Path $androidDir $props.storeFile
keytool -list -v -keystore $keyPath -storepass $props.storePassword -alias $props.keyAlias |
  Select-String -Pattern "SHA256:"
