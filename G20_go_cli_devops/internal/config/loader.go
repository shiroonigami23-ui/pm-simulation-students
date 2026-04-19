package config

import (
    "fmt"
    "os"
    "gopkg.in/yaml.v3"
)

type Pipeline struct {
    Name     string            `yaml:"name"`
    Version  string            `yaml:"version"`
    Env      map[string]string `yaml:"env"`
    Stages   []Stage           `yaml:"stages"`
}

type Stage struct {
    Name     string   `yaml:"name"`
    Steps    []Step   `yaml:"steps"`
    DependsOn []string `yaml:"depends_on"`
}

type Step struct {
    Name    string   `yaml:"name"`
    Run     string   `yaml:"run"`
    WorkDir string   `yaml:"workdir"`
    Env     map[string]string `yaml:"env"`
    AllowFailure bool `yaml:"allow_failure"`
}

func Load(path string) (*Pipeline, error) {
    data, err := os.ReadFile(path)
    if err != nil { return nil, fmt.Errorf("cannot read %s: %w", path, err) }
    var p Pipeline
    if err := yaml.Unmarshal(data, &p); err != nil {
        return nil, fmt.Errorf("invalid YAML: %w", err)
    }
    return &p, nil
}
