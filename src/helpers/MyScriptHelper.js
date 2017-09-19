/* eslint-disable */
import eventBus from './event-bus';

function doSomethingCool(text, context, splashPath) {
  eventBus.bus.$emit('notify', text, context);
  eventBus.bus.$emit('updateSplash', splashPath);
}

export default {
  doSomethingCool,
};
