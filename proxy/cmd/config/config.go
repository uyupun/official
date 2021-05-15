package config

import (
	"flag"
	"io/ioutil"
	"log"

	"gopkg.in/yaml.v2"
)

type Config struct {
	Env    string `json:"env" yaml:"env"`
	Listen string `json:"listen" yaml:"listen"`
}

var conf Config

func Init() {
	configPath := getPath()
	buf, err := ioutil.ReadFile(configPath)
	if err != nil {
		log.Fatal(err.Error())
	}
	err = yaml.Unmarshal(buf, &conf)
	if err != nil {
		log.Fatal(err.Error())
	}
}

func getPath() string {
	var configPath string
	flag.StringVar(&configPath, "config", "", "config path")
	flag.Parse()
	if configPath == "" {
		log.Fatal("expected --config <config_path>")
	}
	return configPath
}

func Get() *Config {
	return &conf
}
