package commands

import (
    "fmt"
    "github.com/g20/devflow/internal/config"
    "github.com/g20/devflow/internal/runner"
    "github.com/spf13/cobra"
)

var runCmd = &cobra.Command{
    Use:   "run",
    Short: "Execute a pipeline from a YAML config file",
    RunE: func(cmd *cobra.Command, args []string) error {
        cfgPath, _ := cmd.Flags().GetString("config")
        cfg, err   := config.Load(cfgPath)
        if err != nil { return fmt.Errorf("failed to load config: %w", err) }
        return runner.Run(cfg)
    },
}

func init() { runCmd.Flags().StringP("config", "c", "pipeline.yaml", "Path to pipeline YAML") }
