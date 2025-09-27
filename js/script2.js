timeline4.onmousedown = () => {
    let pageX = 0;
  
    document.onmousemove = e => {
      if (pageX !== 0) {
        timeline4.scrollLeft = timeline4.scrollLeft + (pageX - e.pageX);
      }
      pageX = e.pageX;
    };
    timeline4.onmouseup = () => {
      document.onmousemove = null;
      timeline4.onmouseup = null;
    };
    timeline4.ondragstart = () => {
      return false;
    };
  };