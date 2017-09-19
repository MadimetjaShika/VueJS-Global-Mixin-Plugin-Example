import Vue from 'vue';
import Rifle from '@/components/Rifle/Rifle';
import App from '@/App';

const triggerActionText = 'Long Rifle Fired, Whopdie Doo!';

describe('Rifle.vue', () => {
  it('inits correct default data', () => {
    expect(typeof Rifle.data).toBe('function');
    const defaultData = Rifle.data();
    expect(defaultData.triggerAction).toBe(triggerActionText);
  });

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Rifle);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('.title h1').textContent)
      .to.equal('Rifle');
  });

  it('trigger pull alerts correct text', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();

    const button = Rifle.$el.querySelector('button');
    button.dispatchEvent(new window.Event('click'));
    // Rifle._watcher.run();

    expect(vm.$el.querySelector('.notification-text p').textContent).to.contain(triggerActionText);
  });
});
