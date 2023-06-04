import React from "react";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useAtom } from "jotai";
import { modalListAtom } from "store";
import styled, { keyframes } from "styled-components";
import { ToastContainer } from "react-toastify";
import Header from "@/layout/Header";

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

interface ModalBackdropProps {
  children?: React.ReactNode;
}

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: ${(props: ModalBackdropProps) => (props.children ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  z-index: 10;

  background-color: rgba(0, 0, 0, 0.28);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const Layout: React.FC = () => {
  const [modalList, setModalList] = useAtom(modalListAtom);

  return (
    <>
      <Header />

      <Outlet />

      {modalList.map((modal, index) => (
        <ModalBackdrop
          onClick={() => setModalList([])}
          key={index}
          style={{
            zIndex: 10 + index,
          }}
        >
          {modal}
        </ModalBackdrop>
      ))}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={3}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
