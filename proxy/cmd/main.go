package main

import (
	"time"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"github.com/uyupun/official/proxy/cmd/config"
	"github.com/uyupun/official/proxy/graph"
	"github.com/uyupun/official/proxy/graph/generated"
)

func main() {
	engine := gin.Default()

	config.Init()
	conf := config.Get()

	setCors(engine)
	registerRoutes(engine, conf.Env)
	engine.Run(conf.Listen)
}

func setCors(engine *gin.Engine) {
	engine.Use(cors.New(cors.Config{
		AllowOrigins: []string{
			"http://localhost:3000",
		},
		AllowMethods: []string{
			"POST",
			"GET",
			"OPTIONS",
		},
		AllowHeaders: []string{
			"Access-Control-Allow-Credentials",
			"Access-Control-Allow-Headers",
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"Authorization",
		},
		AllowCredentials: true,
		MaxAge:           24 * time.Hour,
	}))
}

func registerRoutes(engine *gin.Engine, env string) {
	engine.GET("/", indexHandler())
	engine.POST("/query", graphqlHandler())
	if env == "development" {
		engine.GET("/playground", playgroundHandler())
	}
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
