# Release Process

This document explains how to release a new version of `@permify/permify-node` to NPM.

## Overview

The release process is fully automated using GitHub Actions. When you create a GitHub release, the package is automatically published to NPM.

## How to Release

### 1. Prepare

Make sure everything is ready:

```bash
# Pull latest changes
git checkout main
git pull origin main

# Run tests
yarn run-test

# Build the project
yarn build
```

### 2. Choose Version Number

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (x.0.0) - Breaking changes
- **MINOR** (0.x.0) - New features (backward compatible)
- **PATCH** (0.0.x) - Bug fixes

Examples:
- `1.1.1` → `1.1.2` (bug fix)
- `1.1.2` → `1.2.0` (new feature)
- `1.2.0` → `2.0.0` (breaking change)

### 3. Create GitHub Release

1. Go to [Releases](https://github.com/Permify/permify-node/releases)
2. Click **"Draft a new release"**
3. Fill in the details:
   - **Tag version**: `v1.2.0` (must start with `v`)
   - **Release title**: `v1.2.0`
   - **Description**: List changes, new features, and bug fixes
4. Click **"Publish release"**

### 4. Automatic Publishing

Once published, GitHub Actions will:
- Build the package
- Extract version from tag (e.g., `v1.2.0` → `1.2.0`)
- Update `package.json` version
- Publish to NPM

Track progress at: https://github.com/Permify/permify-node/actions

### 5. Verify

Check that the new version is live:

```bash
npm view @permify/permify-node version
```

## Proto Updates

Proto definitions are automatically synced from [Buf Schema Registry](https://buf.build/permifyco/permify).

### Automatic Updates

The proto workflow runs on every push to `main`:
- Generates TypeScript code from latest proto definitions
- Creates a pull request if changes are detected
- PR branch: `proto-update/permify-latest`

### Manual Update

To manually update protos:

```bash
yarn buf:generate
```

## Configuration

### Required Secrets

Set in GitHub repository settings:

- **NPM_TOKEN**: Authentication token for publishing to NPM
  - Create at [npmjs.com](https://www.npmjs.com/) → Access Tokens
  - Type: **Automation**
  - Permission: **Read and Write**

## Workflows

### 1. Publish Workflow (`.github/workflows/publish.yml`)

**Trigger**: GitHub release published

**Steps**:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies
4. Build (`yarn build`)
5. Update version
6. Publish to NPM

### 2. Proto Update Workflow (`.github/workflows/protos.yml`)

**Trigger**: Push to `main` or manual dispatch

**Steps**:
1. Setup Buf CLI
2. Generate TypeScript code
3. Create PR if changes detected

## Troubleshooting

### Build Failed

```bash
# Test locally
yarn build
```

### Publish Failed

- Check if `NPM_TOKEN` is valid
- Verify version doesn't already exist on NPM
- Check [Actions logs](https://github.com/Permify/permify-node/actions)

### Wrong Version Published

If you published the wrong version:

1. Delete the GitHub release
2. Delete the Git tag:
   ```bash
   git tag -d v1.2.0
   git push origin :refs/tags/v1.2.0
   ```
3. Unpublish from NPM (within 24 hours):
   ```bash
   npm unpublish @permify/permify-node@1.2.0
   ```

**Note**: After 24 hours, you cannot unpublish. Release a new patch version instead.

## Release Checklist

Before releasing:

- [ ] All tests pass
- [ ] Code reviewed and merged
- [ ] Version number follows semantic versioning
- [ ] Release notes prepared
- [ ] Breaking changes documented (if any)
- [ ] NPM_TOKEN is valid

## Links

- [NPM Package](https://www.npmjs.com/package/@permify/permify-node)
- [GitHub Repository](https://github.com/Permify/permify-node)
- [Buf Schema Registry](https://buf.build/permifyco/permify)

