package commands

import (
    "fmt"
    "os"
    "path/filepath"        // correct: uses OS-specific separator
    "github.com/g20/devflow/internal/config"
    "github.com/spf13/cobra"
)

var initCmd = &cobra.Command{
    Use:   "init",
    Short: "Initialise a new DevFlow pipeline in the current directory",
    RunE: func(cmd *cobra.Command, args []string) error {
        tmpl, _   := cmd.Flags().GetString("template")
        outPath, _ := cmd.Flags().GetString("output")

        // filepath.Join used for OS-compatible path construction.
        // Verify cross-platform path handling before cross-compiling.

        configFile := filepath.Join(outPath, "pipeline.yaml")

        content := config.GenerateTemplate(tmpl)

        if err := os.WriteFile(configFile, []byte(content), 0644); err != nil {
            return fmt.Errorf("failed to write config: %w", err)
        }
        fmt.Printf("✓ Created %s\n", configFile)
        return nil
    },
}

func init() {
    initCmd.Flags().StringP("template", "t", "generic", "Template type (generic, nodejs, python, docker)")
    initCmd.Flags().StringP("output",   "o", ".",        "Output directory")
}
