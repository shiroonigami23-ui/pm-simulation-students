# SRS — G20: DevFlow CLI (Go DevOps Tool)
**Budget:** $10,500 | **Timeline:** 7 days

## 1. Introduction
DevFlow is a lightweight local CI/CD pipeline runner. Teams define pipelines in YAML and execute them locally or in CI environments.

## 2. Constraints
- Go 1.21 + Cobra
- **Cross-platform binary required (Linux, macOS, Windows)**
- YAML config file support
- Distribute via GitHub Releases

## 3. Functional Requirements

**FR-01** `run` command — execute all pipeline stages from a YAML config.

**FR-02** `validate` command — validate pipeline YAML without executing.

**FR-03** `init` command — generate a starter pipeline.yaml from a template.

**FR-04** YAML Config Support — pipelines defined as YAML with stages, steps, env vars, working directories.

**FR-05** Cross-Platform Compatibility — **binaries must run correctly on Linux, macOS, and Windows. All file path handling must be OS-agnostic.** See `internal/config/template.go` and `cmd/commands/init.go` for path-related code.

**FR-06** YAML Config File Support and Validation — *(Scope Creep Day 3)* add `--validate-schema` flag to check YAML against a strict JSON schema.

**FR-07** Docker Step Support — execute steps inside a Docker container. *(Not yet implemented)*

## 4. Build
```
GOOS=linux   GOARCH=amd64 go build -o devflow-linux   ./cmd/main.go
GOOS=windows GOARCH=amd64 go build -o devflow.exe     ./cmd/main.go
GOOS=darwin  GOARCH=amd64 go build -o devflow-macos   ./cmd/main.go
```
Cross-compilation must succeed without errors for all three targets.

## 5. Constraints
Budget $10,500 | 7 days | Copilot + Gemini only
