import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <span className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
  display: block;
  width: 84px;
  height: 84px;
  position: relative;
  margin: auto;
  margin: 20vh auto;
}

.loader:before , .loader:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  // background: black;
  transform: translate(-50% , -100%)  scale(0);
  animation: push_401 2s infinite linear;
}

.loader:after {
  animation-delay: 1s;
}

@keyframes push_401 {
  0% , 50% {
    transform: translate(-50% , 0%)  scale(1)
  }

  100% {
    transform: translate(-50%, -100%) scale(0)
  }
}
`;

export default Loader;
