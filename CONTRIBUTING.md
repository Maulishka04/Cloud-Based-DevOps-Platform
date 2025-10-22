# Contributing to CloudDevOpsHub

First off, thank you for considering contributing to CloudDevOpsHub! 🎉

The following is a set of guidelines for contributing to this project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by a Code of Conduct. By participating, you are expected to uphold this code. Please be respectful and professional in all interactions.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (code snippets, screenshots)
- **Describe the behavior you observed and expected**
- **Include your environment details** (OS, Node version, Docker version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any alternatives** you've considered

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. Ensure the test suite passes
4. Make sure your code follows the existing style
5. Write a clear commit message
6. Update documentation as needed

## 🛠️ Development Setup

### Prerequisites

- Node.js ≥ 18.0
- Python ≥ 3.10
- Docker ≥ 24.0
- Docker Compose ≥ 2.0

### Initial Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/CloudDevOpsHub.git
cd CloudDevOpsHub

# Install dependencies for users service
cd services/users
npm install

# Install dependencies for ML service
cd ../ml-service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Install frontend dependencies
cd ../../frontend
npm install

# Start local development environment
cd ..
docker-compose -f docker-compose.dev.yml up -d
```

### Running Tests

```bash
# Users Service
cd services/users
npm test
npm run test:e2e

# ML Service
cd services/ml-service
pytest
pytest --cov

# Frontend
cd frontend
npm test
```

## 🔄 Pull Request Process

1. **Update Documentation**: If you change APIs or add features, update relevant docs
2. **Add Tests**: Ensure your changes are covered by tests
3. **Follow Code Style**: Run linters and formatters
4. **Keep PRs Focused**: One feature/fix per PR
5. **Write Descriptive Commits**: Follow commit message guidelines
6. **Update CHANGELOG**: Add your changes to the unreleased section

### PR Checklist

- [ ] Tests pass locally (`npm test`, `pytest`)
- [ ] Code follows project style guidelines
- [ ] Documentation updated (if applicable)
- [ ] No merge conflicts with `main`
- [ ] Commit messages follow guidelines
- [ ] No secrets or sensitive data in commits
- [ ] Added/updated tests for new functionality

## 📝 Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint rules (run `npm run lint`)
- Use Prettier for formatting (run `npm run format`)
- Prefer `async/await` over callbacks
- Add JSDoc comments for public APIs
- Use meaningful variable names

```typescript
// Good
async function getUserById(userId: string): Promise<User> {
  return await userRepository.findOne({ id: userId });
}

// Bad
async function get(id: string) {
  return await repo.findOne({ id });
}
```

### Python

- Follow PEP 8 style guide
- Use type hints for function signatures
- Use Black for formatting
- Add docstrings for public functions
- Keep functions small and focused

```python
# Good
def train_model(data: pd.DataFrame, target_col: str) -> RandomForestRegressor:
    """
    Train a random forest model on the provided data.
    
    Args:
        data: Training data
        target_col: Name of target column
        
    Returns:
        Trained model instance
    """
    X = data.drop(columns=[target_col])
    y = data[target_col]
    return RandomForestRegressor().fit(X, y)
```

### Testing

- Write tests for all new features
- Aim for >80% code coverage
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

```typescript
test('should create a new user with valid data', async () => {
  // Arrange
  const userData = { name: 'John', email: 'john@example.com' };
  
  // Act
  const result = await createUser(userData);
  
  // Assert
  expect(result).toHaveProperty('id');
  expect(result.name).toBe('John');
});
```

## 💬 Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

### Examples

```bash
feat(users): add email verification endpoint

Implements email verification using JWT tokens.
Sends verification email via AWS SES.

Closes #123
```

```bash
fix(ml-service): handle missing model file gracefully

Previously crashed when model.pkl was not found.
Now returns 503 with helpful error message.
```

```bash
docs(readme): update deployment instructions

Add kubectl configuration steps and troubleshooting section.
```

## 🎨 Branch Naming

Use descriptive branch names:

- `feature/add-oauth2-auth`
- `fix/postgres-connection-leak`
- `docs/update-deployment-guide`
- `refactor/simplify-user-service`

## ❓ Questions?

Feel free to open an issue with the `question` label or start a discussion!

---

Thank you for contributing to CloudDevOpsHub! 🚀
