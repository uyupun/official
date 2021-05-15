package main

import (
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gin-gonic/gin"

	"github.com/uyupun/official/proxy/cmd/config"
	"github.com/uyupun/official/proxy/graph"
	"github.com/uyupun/official/proxy/graph/generated"
)

func main() {
	engine := gin.Default()

	config.Init()
	conf := config.Get()

	registerRoutes(engine)
	engine.Run(conf.Listen)
}

func registerRoutes(engine *gin.Engine) {
	engine.GET("/", indexHandler())
	engine.POST("/query", graphqlHandler())
	engine.GET("/playground", playgroundHandler())
}

func indexHandler() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		ctx.JSON(200, "Reverse proxy connecting official to Re:gret")
	}
}

func graphqlHandler() gin.HandlerFunc {
	h := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	return func(ctx *gin.Context) {
		h.ServeHTTP(ctx.Writer, ctx.Request)
	}
}

func playgroundHandler() gin.HandlerFunc {
	h := playground.Handler("GraphQL", "/query")

	return func(ctx *gin.Context) {
		h.ServeHTTP(ctx.Writer, ctx.Request)
	}
}
