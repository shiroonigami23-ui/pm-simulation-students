package commands

import (
    "fmt"
    "os"
    "github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
    Use:   "devflow",
    Short: "DevFlow — lightweight CI/CD pipeline runner",
    Long:  `DevFlow reads a YAML pipeline config and executes steps locally or in Docker.`,
}

func Execute() {
    rootCmd.AddCommand(runCmd, validateCmd, initCmd)
    if err := rootCmd.Execute(); err != nil {
        fmt.Fprintln(os.Stderr, err)
        os.Exit(1)
    }
}
