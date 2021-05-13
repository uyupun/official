package main

import (
	"github.com/gin-gonic/gin"

	"github.com/uyupun/official/proxy/cmd/config"
)

func main() {
	engine := gin.Default()

	config.Init()
	conf := config.Get()

	engine.Run(conf.Listen)
}
