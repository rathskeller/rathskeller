SHELL := /bin/bash
export PATH := node_modules/.bin:$(PATH)

test:
	jasmine

deps:
	npm install