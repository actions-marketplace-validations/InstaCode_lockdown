#Lockdown CI Security

![units-test](https://github.com/InstaCode/lockdown/workflows/units-test/badge.svg)

This GitHub action restricts the build from continuing to execution unless the author of the commit/pull request is among a list of approved users.
```yaml
- uses: InstaCode/lockdown@v1
  with:
    users: fake-user, dependabot-preview
```

The `users` property accepts a comma delimited list of valid github usernames that will be trimmed during processing.

