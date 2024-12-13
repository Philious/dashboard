import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import SelectField from '@/components/input/SelectField.vue';

describe('Input-select second option', () => {
  it('select category filter', async () => {
    const inputId = '[data-id=input-id]';
    const menu = '[data-id=menu-id]';
    const menuItemId = '.menu-item:nth-child(2)';
    const wrapper = mount(SelectField, {
      props: {
        options: [
          { id: "o1", label: "Clear", value: null },
          { id: "o2", label: "Red", value: 'v2' },
          { id: "o3", label: "Orange", value: 'v1' },
        ],
        dataId: 'input-id'
      }
    });
    // No menu
    expect(wrapper.find(menu).exists()).toBe(false);

    // Focus input
    const input = wrapper.find(inputId);
    await input.trigger('focus');

    // Menu visible
    expect(wrapper.find(menu).exists()).toBe(true);

    //click menu item
    const menuItem = wrapper.find(menuItemId);
    await menuItem.trigger('click');

    // No menu
    expect(wrapper.find(menu).exists()).toBe(false);
    expect((input.element as HTMLInputElement).value).toBe('Red')

  });
});