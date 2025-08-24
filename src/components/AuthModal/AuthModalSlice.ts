import { createAppSlice } from '../../store/createAppSlice';

interface AuthModalState {
  isOpen: boolean;
}

const initialState: AuthModalState = {
  isOpen: false,
};

export const authModalSlice = createAppSlice({
  name: 'authModal',

  initialState: initialState,

  reducers: {
    openAuthModal: (state) => {
      state.isOpen = true;
      console.log(`openModal`);
    },
    closeAuthModal: (state) => {
      state.isOpen = false;
      console.log(`closeModal`);
    },
  },

  selectors: {
    selectAuthModal: (state) => state.isOpen,
  },
});

export const { openAuthModal, closeAuthModal } = authModalSlice.actions;
export const { selectAuthModal } = authModalSlice.selectors;
