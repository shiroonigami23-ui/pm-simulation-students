package config

import "fmt"

// GenerateTemplate returns a YAML pipeline template for the given type.
// NOTE: template paths use forward slashes. Verify cross-platform compatibility.
func GenerateTemplate(tmpl string) string {
    switch tmpl {
    case "nodejs":
        return fmt.Sprintf(`name: nodejs-pipeline
version: "1.0"
env:
  NODE_ENV: production
stages:
  - name: install
    steps:
      - name: Install dependencies
        run: npm ci
        workdir: .
  - name: test
    steps:
      - name: Run tests
        run: npm test
        workdir: .
  - name: build
    steps:
      - name: Build
        run: npm run build
        workdir: .
      - name: Check output
        run: ls -la build/output/dist    # hardcoded "/" — breaks Windows cmd.exe
        workdir: build/output             # hardcoded "/" in path string
`)
    case "python":
        return fmt.Sprintf(`name: python-pipeline
version: "1.0"
stages:
  - name: test
    steps:
      - name: Install
        run: pip install -r requirements.txt
      - name: Lint
        run: flake8 src/           # hardcoded "/"
      - name: Test
        run: pytest tests/         # hardcoded "/"
`)
    default:
        return `name: my-pipeline
version: "1.0"
stages:
  - name: build
    steps:
      - name: Hello
        run: echo "DevFlow pipeline running"
`
    }
}
