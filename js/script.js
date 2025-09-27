timeline.onmousedown = () => {
    let pageX = 0;
  
    document.onmousemove = e => {
      if (pageX !== 0) {
        timeline.scrollLeft = timeline.scrollLeft + (pageX - e.pageX);
      }
      pageX = e.pageX;
    };
    timeline.onmouseup = () => {
      document.onmousemove = null;
      timeline.onmouseup = null;
    };
    timeline.ondragstart = () => {
      return false;
    };
  };

  timeline2.onmousedown = () => {
    let pageY = 0;
  
    document.onmousemove = e => {
      if (pageY !== 0) {
        timeline2.scrollTop = timeline2.scrollTop + (pageY - e.pageY);
      }
      pageY = e.pageY;
    };
  
    timeline2.onmouseup = () => {
      document.onmousemove = null;
      timeline2.onmouseup = null;
    };
  
    timeline2.ondragstart = () => {
      return false;
    };
  };

  timeline3.onmousedown = () => {
    let pageY = 0;
  
    document.onmousemove = e => {
      if (pageY !== 0) {
        timeline3.scrollTop = timeline3.scrollTop + (pageY - e.pageY);
      }
      pageY = e.pageY;
    };
  
    timeline3.onmouseup = () => {
      document.onmousemove = null;
      timeline3.onmouseup = null;
    };
  
    timeline3.ondragstart = () => {
      return false;
    };
  };
  
