# Contribution Guidelines

Thank you for your interest in contributing to this project!
To ensure a consistent and efficient workflow across the team, please follow the guidelines below.

---

## 1. Pull Request Process (Internal Project)

1. **Clone** the repository to your local machine (no need to fork).
2. **Create a new branch** for each feature, bugfix, or task:

   ```bash
   git checkout -b feat/feature-name
   ```
3. **Commit** your changes using the conventional commit format ([See section 2](#2-commit-message-convention-conventional-commit)).
4. **Push** your branch to the remote repository:

   ```bash
   git push origin feat/feature-name
   ```
5. **Open a Pull Request** to merge your branch into the main development branch (usually `main`).
6. **Describe your changes** clearly in the PR description.
7. **Tag at least one reviewer** for feedback.
8. **Address review comments** and make the necessary updates before merging.

---

## 2. Commit Message Convention (Conventional Commit)

All commits must follow the [Conventional Commit](https://www.conventionalcommits.org/) standard:

```bash
<type>(<scope>): <short description>
```

* `type`: The kind of change (e.g., feat, fix, docs, style)
* `scope`: (optional) The area of the codebase affected
* `short description`: A brief summary (no capital letter at the start, no period at the end)

### Examples:

* `feat(auth): add google login functionality`
* `fix(api): fix incorrect data response`
* `docs: update README with new setup steps`
* `refactor: improve code structure for booking module`

### Common Types:

| No. | Type       | Description                                      |
| --- | ---------- | ------------------------------------------------ |
| 1.  | `feat`     | New feature                                      |
| 2.  | `fix`      | Bug fix                                          |
| 3.  | `docs`     | Documentation only changes                       |
| 4.  | `style`    | Code style changes (formatting, spacing)         |
| 5.  | `refactor` | Code changes that don't fix bugs or add features |
| 6.  | `test`     | Add or update tests                              |
| 7.  | `chore`    | Maintenance (build scripts, configs, etc.)       |
| 8.  | `perf`     | Performance improvements                         |
| 9.  | `ci`       | CI configuration or scripts                      |
| 10. | `revert`   | Reverts a previous commit                        |

> 📌 Following this helps automate changelogs and maintain a clean commit history.

---

## 3. Code Style & Testing

* Follow the code style defined in `.eslintrc.*` or `.prettierrc.*` (if available).

* Before committing, run the following commands:

  ```bash
  npm run lint       # Check for code issues
  npm run format     # Format code (if Prettier is used)
  npm test           # Run tests (if available)
  ```

* We recommend using pre-commit hooks via **Husky** and **Commitlint** to enforce these rules automatically.

---

## 4. Reporting Bugs & Requesting Features

### Bug Reports:

* Create a new **GitHub Issue** and include:

    * Environment info (OS, browser, app version)
    * Steps to reproduce the bug
    * Expected vs. actual results
    * Relevant logs or screenshots

### Feature Requests:

* Create an **Issue** with:

    * A clear description of the new feature
    * Reason/benefits for the request

> 💬 For small questions, feel free to reach out via our team chat first.

---

## 5. Contact & Support

For questions, collaboration, or discussions, please reach out via:

* Slack: `#team-project` channel
* Email: `nhmt1407@gmail.com`
* Discord (if applicable): `[Discord link]`

---

Thanks again for helping improve this project! 🙌
Together, we build better software.
