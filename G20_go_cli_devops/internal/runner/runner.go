package runner

import (
    "fmt"
    "os"
    "os/exec"
    "runtime"
    "github.com/g20/devflow/internal/config"
)

func Run(p *config.Pipeline) error {
    fmt.Printf("Running pipeline: %s (v%s)\n", p.Name, p.Version)
    fmt.Printf("Platform: %s/%s\n", runtime.GOOS, runtime.GOARCH)

    for _, stage := range p.Stages {
        fmt.Printf("\n[stage] %s\n", stage.Name)
        for _, step := range stage.Steps {
            fmt.Printf("  [step] %s\n", step.Name)
            if err := runStep(step, p.Env); err != nil && !step.AllowFailure {
                return fmt.Errorf("step '%s' failed: %w", step.Name, err)
            }
        }
    }
    fmt.Println("\n✓ Pipeline completed.")
    return nil
}

func runStep(step config.Step, pipelineEnv map[string]string) error {
    var cmd *exec.Cmd
    if runtime.GOOS == "windows" {
        cmd = exec.Command("cmd", "/C", step.Run)
    } else {
        cmd = exec.Command("sh", "-c", step.Run)
    }
    cmd.Stdout = os.Stdout
    cmd.Stderr = os.Stderr
    if step.WorkDir != "" { cmd.Dir = step.WorkDir }
    for k, v := range pipelineEnv { cmd.Env = append(os.Environ(), fmt.Sprintf("%s=%s", k, v)) }
    for k, v := range step.Env    { cmd.Env = append(cmd.Env, fmt.Sprintf("%s=%s", k, v)) }
    return cmd.Run()
}
