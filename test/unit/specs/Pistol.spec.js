import Vue from 'vue';
import Pistol from '@/components/Pistol/Pistol';
import App from '@/App';

const triggerActionText = 'arabellum Fired, Yay!';

describe('Pistol.vue', () => {
  it('inits correct default data', () => {
    expect(typeof Pistol.data).toBe('function');
    const defaultData = Pistol.data();
    expect(defaultData.triggerAction).toBe(triggerActionText);
  });

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Pistol);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('.title h1').textContent)
      .to.equal('Pistol');
  });

  it('trigger pull alerts correct text', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();

    const button = Pistol.$el.querySelector('button');
    button.dispatchEvent(new window.Event('click'));
    // Pistol._watcher.run();

    expect(vm.$el.querySelector('.notification-text p').textContent).to.contain(triggerActionText);
  });
});
