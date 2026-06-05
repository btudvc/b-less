# B-Less Android APK

This folder holds the Trusted Web Activity config for packaging
`https://btudvc.github.io/b-less/` as an Android app.

## Build

1. Install Android Studio or Android command line tools.
2. Configure Bubblewrap if needed:

```powershell
npx.cmd @bubblewrap/cli updateConfig --jdkPath="C:\Program Files\Eclipse Adoptium\jdk-25.0.2.10-hotspot" --androidSdkPath="$env:LOCALAPPDATA\Android\Sdk"
```

3. Generate/update the Android project:

```powershell
npm.cmd run twa:update
```

4. Build signed APK/AAB:

```powershell
npm.cmd run twa:build
```

Outputs are expected under `android/app-release-signed.apk` and
`android/app-release-bundle.aab`.

The local signing key and passwords are intentionally ignored by git:

- `android/keystore/b-less-release.keystore`
- `android/signing.properties`

Do not lose them. The same key is needed for future app updates.
