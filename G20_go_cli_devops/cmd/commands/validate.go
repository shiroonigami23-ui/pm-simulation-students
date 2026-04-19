package commands

import (
    "fmt"
    "github.com/g20/devflow/internal/config"
    "github.com/g20/devflow/internal/validator"
    "github.com/spf13/cobra"
)

var validateCmd = &cobra.Command{
    Use:   "validate",
    Short: "Validate a pipeline YAML without executing it",
    RunE: func(cmd *cobra.Command, args []string) error {
        cfgPath, _ := cmd.Flags().GetString("config")
        cfg, err   := config.Load(cfgPath)
        if err != nil { return err }
        errs := validator.Validate(cfg)
        if len(errs) == 0 {
            fmt.Println("✓ Pipeline config is valid.")
            return nil
        }
        fmt.Printf("Found %d validation error(s):\n", len(errs))
        for _, e := range errs { fmt.Printf("  - %s\n", e) }
        return fmt.Errorf("validation failed")
    },
}

func init() { validateCmd.Flags().StringP("config", "c", "pipeline.yaml", "Path to pipeline YAML") }
