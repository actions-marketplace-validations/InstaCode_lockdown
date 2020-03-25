# Lockdown CI Security

![build-test](https://github.com/InstaCode/lockdown/workflows/build-test/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=InstaCode_lockdown&metric=alert_status)](https://sonarcloud.io/dashboard?id=InstaCode_lockdown)

This GitHub action restricts the build from continuing to execution unless the author of the commit/pull request is among a list of approved users.
```yaml
- uses: InstaCode/lockdown@v1
  with:
    users: fake-user, dependabot-preview
```

The `users` property accepts a comma delimited list of valid github usernames that will be trimmed during processing.

