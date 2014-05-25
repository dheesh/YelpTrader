REPORTER=dot
TESTS=tests/*.js
test:
	@./node_modules/.bin/mocha --reporter $(REPORTER) $(TESTS)
.PHONY:
	test
