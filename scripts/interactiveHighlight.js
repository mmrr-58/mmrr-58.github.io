function wrapWords(selector) {
    const paragraphs = document.querySelectorAll(selector);
    
    paragraphs.forEach(p => {
        wrapTextNodes(p);
    });
}

function wrapTextNodes(element) {
    const excludedClasses = ['strikeOut', 'note'];
    if (element.classList && excludedClasses.some(cls => element.classList.contains(cls))) {
        return;
    }
    const childNodes = Array.from(element.childNodes);
    childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            const words = text.split(/(\s+)/);
            
            const fragment = document.createDocumentFragment();
            words.forEach(word => {
                if (word.trim().length > 0) {
                    const span = document.createElement('span');
                    span.className = 'word';
                    span.textContent = word;
                    fragment.appendChild(span);
                } else {
                    fragment.appendChild(document.createTextNode(word));
                }
            });
            
            node.replaceWith(fragment);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            wrapTextNodes(node);
        }
    });
}

function handleSelection() {
    document.querySelectorAll('.word.selected').forEach(el => {
        el.classList.remove('selected');
    });

    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed) return;

    const range = selection.getRangeAt(0);
    const allWords = Array.from(document.querySelectorAll('.word'));
    
    allWords.forEach(word => {
        const wordRange = document.createRange();
        wordRange.selectNodeContents(word);
        
        if (range.compareBoundaryPoints(Range.START_TO_END, wordRange) > 0 &&
            range.compareBoundaryPoints(Range.END_TO_START, wordRange) < 0) {
            word.classList.add('selected');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    wrapWords('.content p');
    
    document.addEventListener('selectionchange', handleSelection);
    document.addEventListener('mouseup', handleSelection);
});