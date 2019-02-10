const createDiv = id => {
  const root = document.createElement('div');
  root.setAttribute('id', id);
  document.body.appendChild(root);

  return root;
};

const getOrCreateDiv = id => {
  const div = document.getElementById(id);

  return div || createDiv(id);
};

const formatDate = date => {
  return date.toLocaleDateString();
};

export { createDiv, getOrCreateDiv, formatDate };
