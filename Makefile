MODULE			:= state-object
EXPORT 			:= stateObject
BUILD_DIR 		:= build
BUNDLE 			:= $(BUILD_DIR)/$(MODULE).js
BUNDLE_MIN		:= $(BUILD_DIR)/$(MODULE).min.js
ENTRY			:= index.js
BINS 			:= ./node_modules/.bin

#
#

SRC := $(ENTRY)
ifneq ($(wildcard lib),)
	SRC += $(shell find lib -type f -name '*.js')
endif

.PHONY: all bundle clean info watch

all: bundle

bundle: $(BUNDLE) $(BUNDLE_MIN)

clean:
	rm -f $(BUNDLE)
	rm -f $(DEMO_BUNDLE)

info:
	@echo "Source:" $(SRC)

watch:
	watchify -o $(BUNDLE) $(ENTRY) &

$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

$(BUNDLE): $(BUILD_DIR) $(SRC)
	browserify -s $(EXPORT) $(ENTRY) > $@

$(BUNDLE_MIN): $(BUNDLE)
	$(BINS)/uglifyjs < $(BUNDLE) > $@
