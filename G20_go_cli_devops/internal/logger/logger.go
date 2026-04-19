package logger

import (
    "fmt"
    "time"
)

type Level int
const (LevelInfo Level = iota; LevelWarn; LevelError)

func Log(level Level, msg string) {
    prefix := map[Level]string{LevelInfo: "INFO", LevelWarn: "WARN", LevelError: "ERROR"}[level]
    fmt.Printf("[%s] %s  %s\n", time.Now().Format("15:04:05"), prefix, msg)
}
