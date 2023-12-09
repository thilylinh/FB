const stateAction = {
  state: {
    activeAmountItemId: null,
  },
  mutations: {
    setActiveAmountItemId(state: any, itemId: any) {
      state.activeAmountItemId = itemId;
    },
  },
  actions: {},
  getters: {},
};

export default stateAction;
