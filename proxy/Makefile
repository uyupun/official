setup:
	go get github.com/cespare/reflex
	cp config.yaml.example config.yaml

run:
	reflex -r '\.go|config.yaml\z' -s -- sh -c 'go run cmd/main.go --config config.yaml'

gen:
	rm graph/schema.resolvers.go
	go run github.com/99designs/gqlgen generate
