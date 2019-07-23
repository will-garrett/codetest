.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

all: ## Build the containers
	@printf "\033[36m%-30s\033[0m %s\n" "Building Docker Images"
	@cp env-example .env
	@docker-compose build

run: ## Run docker-compose and migrations
	@printf "\033[33m%-30s\033[0m %s\n" "Running Docker Compose..."
	@docker-compose up -d
	# this could/should be a while loop
	@if [ ! -d "./_data/codetest" ]; then printf "\033[36m%-30s\033[0m %s\n" "Waiting for MySQL" && sleep 60; fi
	@printf "\033[33m%-30s\033[0m %s\n" "Running Database Migrations/Seeds..." && sleep 5
	@docker exec -t backend.codetest knex migrate:latest
	@docker exec -t backend.codetest knex seed:run
	@printf "\033[33m%-30s\033[0m %s\n" "Done..."
	
	
stop:
	@printf "\033[36m%-30s\033[0m %s\n" "Shutting Down DOcker Containers..."
	@docker-compose down

clean: ## Remove persistent data storage
	@printf "\033[36m%-30s\033[0m %s\n" "Shutting down containers..."
	@docker-compose down
	@printf "\033[36m%-30s\033[0m %s\n" "Removing Persistent Datastore..."
	@rm -rf ./_data/