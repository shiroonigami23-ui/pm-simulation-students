package validator

import (
    "fmt"
    "github.com/g20/devflow/internal/config"
)

func Validate(p *config.Pipeline) []string {
    var errs []string
    if p.Name == "" { errs = append(errs, "pipeline.name is required") }
    if len(p.Stages) == 0 { errs = append(errs, "pipeline must have at least one stage") }
    for i, stage := range p.Stages {
        if stage.Name == "" { errs = append(errs, fmt.Sprintf("stages[%d].name is required", i)) }
        for j, step := range stage.Steps {
            if step.Run == "" { errs = append(errs, fmt.Sprintf("stages[%d].steps[%d].run is required", i, j)) }
        }
    }
    return errs
}
