const Builder = {}

const generateRandomString = () => {
  // vaiable regex random string
  const rndString = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5)

  return rndString
}

// handle on start sortable
const handleSortableStart = () => {
  // hide editor section action
  $('.editor-section__action').removeClass('active')

  // hide hovered section
  $('.editor-section').removeClass('editor-section-hovered')

  // hide editor row action
  $('.editor-row__action').removeClass('active')

  // hide hovered row
  $('.editor-row').removeClass('editor-row-hovered')
}

// handle on stop sortable
const handleSortableStop = (e, ui, elementList) => {
  // identified item has class el-list
  const uiItemDraggable = ui.item.hasClass('el-list')

  // check item if has class el-list
  if (uiItemDraggable) {
    // remove el-list from item
    ui.item.removeClass('el-list')

    // get random string
    const randomString = generateRandomString()

    // set data set element
    const dataSet = ui.item.get(0).dataset.el
    const dataSetParent = ui.item.get(0)

    // set id to this element
    dataSetParent.setAttribute('id', randomString)

    // get element html by parent id
    const elem = elementList.map(item => {
      const newHtml = $(item.html).attr('data-id', randomString)

      return item.initial === dataSet ? newHtml : ''
    })

    // clear css widht and height
    ui.item.css({
      width: '100%',
      height: 'auto',
    })

    // add class editor element as selector
    ui.item.addClass('editor-element')

    // append to dropzone
    ui.item.html(elem)
  }

  // remove helper move
  $('.element-content--helper').remove()
}

Builder.initDraggableElement = () => {
  const options = {
    cursor: 'move',
    helper: 'clone',
    revert: false,
    connectToSortable: '.dropzone',
  }

  $('body')
    .find('.el-list')
    .draggable(options)
}

Builder.initSortable = elementList => {
  const options = {
    connectWith: '.dropzone',
    revert: false,
    placeholder: 'drop-placeholder',
    appendTo: '.dropzone',
    handle: '.handle',
    scroll: false,
    helper: (e, ui) => {
      const elementName = ui.get(0).dataset.elname
      const elementIcon = ui.get(0).dataset.elicon

      const helperHTML = `<div class="el-list helper text-center">
														<div class="item">
															<div class="icon">
																<i class="${elementIcon}"></i>
															</div>
															${elementName}
														</div>
													</div>`

      return helperHTML
    },
    start: (e, ui) => handleSortableStart(),
    stop: (e, ui) => handleSortableStop(e, ui, elementList),
  }

  const elList = $('.dropzone')

  $(elList).sortable(options)
}

Builder.initElementHover = () => {
  $('body')
    .on('mouseenter', '.editor-element', e => {
      const target = e.currentTarget
      // get target id
      const id = $(target).attr('id')

      const isEditing = $(target).hasClass('isEditing')

      const overlay = $('#status-overlay').hasClass('active')

      // active hover if overlay not active
      if (!overlay) {
        // active hover if not have class isEditing
        if (!isEditing) {
          $('.editor-element').removeClass('editor-element-hovered')

          // add border hovered to editor element
          $('#' + id).addClass('editor-element-hovered')

          // initialize element body by data-id
          const elementBody = $('body').find('.element-body[data-id="' + id + '"]')

          // remove editor element action
          $('.element-action').removeClass('active')

          // add class active on element action
          $(elementBody)
            .find('.element-action')
            .addClass('active')
        }
      }
    })
    .on('mouseleave', '.editor-element', () => {
      // remove border hovered from editor element
      $('.editor-element').removeClass('editor-element-hovered')

      // remove editor element action
      $('.element-action').removeClass('active')
    })
}

export default Builder
