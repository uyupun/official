package main

import (
	"github.com/gin-gonic/gin"

	"github.com/uyupun/official/proxy/config"
)

func main() {
	engine := gin.Default()

	config.Init()
	conf := configs.Get()

	engine.Run(conf.Listen)
}
