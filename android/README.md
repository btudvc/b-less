# B-Less Android APK

This folder holds the Trusted Web Activity config for packaging
`https://btudvc.github.io/b-less/` as an Android app.

## Important: Digital Asset Links on GitHub Pages

Trusted Web Activity verification checks Digital Asset Links at the origin
root:

```text
https://btudvc.github.io/.well-known/assetlinks.json
```

The current app is a GitHub Pages project site under `/b-less/`. Files from
this repository are served under that path, so this repository alone cannot
publish the required root-level file for `btudvc.github.io`.

To remove the browser/chrome UI in the APK, use one of these:

- Create a separate `btudvc.github.io` user site repository and publish
  `.well-known/assetlinks.json` there.
- Attach a custom domain to this repository, so this repo is served at the
  domain root.
- Use a root-hosted deployment such as Render and point `android/twa-manifest.json`
  to that host.

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
