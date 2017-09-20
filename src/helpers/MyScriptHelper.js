/* eslint-disable */
import eventBus from './event-bus';

function doSomethingCool(text, context, component, splashPath) {
  eventBus.bus.$emit('notify', text, context);
  eventBus.bus.$emit('populateEvidence', text, component);
  eventBus.bus.$emit('updateSplash', splashPath);
}

function doAnotherCoolThing(text, component) {
  eventBus.bus.$emit('notify', text, 'blue-grey');
  eventBus.bus.$emit('destroyEvidence', component);

}

export default {
  doSomethingCool,
  doAnotherCoolThing,
};
