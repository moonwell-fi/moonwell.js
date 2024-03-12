TAG := moonwelljs

build-docker:
	docker build -t $(TAG) .

install:
	docker run --rm -it \
		-v $$(pwd):$$(pwd) \
		--workdir $$(pwd) \
		$(TAG) \
		npm install

build:
	docker run --rm -it \
		-v $$(pwd):$$(pwd) \
		--workdir $$(pwd) \
		$(TAG) \
		npm run build --report

bash:
	docker run --rm -it \
		-v $$(pwd):$$(pwd) \
		--workdir $$(pwd) \
		$(TAG) \
		bash

# Dev will just do a single build, then activate the tsc watcher. Handy
# for use with npm link to do work on moonwell.js along side another application.
dev:
	docker run --rm -it \
		-v $$(pwd):$$(pwd) \
		--workdir $$(pwd) \
		$(TAG) \
		bash -c 'npm run build && npx tsc --watch'
