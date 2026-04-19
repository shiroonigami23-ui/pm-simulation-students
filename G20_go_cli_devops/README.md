# DevFlow — Go DevOps CLI Tool

## Tech Stack
- Go 1.21 + Cobra
- YAML config parsing
- Cross-platform binary target

## Build
```bash
go build -o devflow ./cmd/main.go
```

**Cross-compile:**
```bash
GOOS=linux   GOARCH=amd64 go build -o devflow-linux   ./cmd/main.go
GOOS=windows GOARCH=amd64 go build -o devflow.exe      ./cmd/main.go
GOOS=darwin  GOARCH=amd64 go build -o devflow-macos    ./cmd/main.go
```

## Usage
```bash
devflow run      --config pipeline.yaml
devflow validate --config pipeline.yaml
devflow init     --template nodejs
```

## Project Structure
```
cmd/commands/       Cobra command definitions
internal/config/    YAML loading and templates
internal/runner/    Pipeline execution
internal/validator/ Config validation
templates/          Example pipeline YAML
```
