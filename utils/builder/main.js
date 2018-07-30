const Builder = {}

const generateRandomString = () => {
  // vaiable regex random string
  const rndString = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5)

  return rndString
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
    let dataSet = ui.item.get(0).dataset.el
    let dataSetParent = ui.item.get(0)
    let columnName = ui.item.get(0).parentNode.dataset.column

    // set id to this element
    dataSetParent.setAttribute('id', randomString)

    // get element html by parent id
    const elem = elementList.map(item => {
      const newHtml = $(item.html).attr('data-id', randomString)

      return item.initial === dataSet ? newHtml : ''
    })

    console.log(ui.item)

    // const listSection = anding.Agestate.landingPage.listSections

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
}

Builder.initDraggableElement = () => {
  const drag = {
    cursor: 'move',
    helper: 'clone',
    revert: false,
    connectToSortable: '.dropzone',
  }

  const elList = $('body').find('.el-list')

  $(elList).draggable(drag)
}

Builder.initSortable = (startHandler, stopHandler) => {
  const helperHTML = (elementName, elementIcon) =>
    `<div class="el-list element-list element-content--helper">
				<div class="element-item">
					<div class="element-icon">
						<i class="${elementIcon}"></i>
					</div>
					<div class="element-text">
						${elementName}
					</div>
				</div>
			</div>`

  const sorts = {
    connectWith: '.dropzone',
    revert: false,
    placeholder: 'drop-placeholder',
    appendTo: '.dropzone',
    handle: '.handle',
    scroll: false,
    helper: (e, ui) => {
      const elementName = ui.get(0).dataset.elname
      const elementIcon = ui.get(0).dataset.elicon

      return helperHTML(elementName, elementIcon)
    },
    // start: (e, ui) => {
    //   console.log('e', e)
    //   console.log('ui', ui)
    // },
    // stop: (e, ui) => handleSortableStop(e, ui, elementList),
    // }
    start: (e, ui) => startHandler(e, ui),
    stop: (e, ui) => stopHandler(e, ui),
  }

  const elList = $('body').find('.dropzone')

  $(elList).sortable(sorts)
}

Builder.initElementHover = () => {
  $('body')
    .on('mouseenter', '.element-body', e => {
      const target = e.currentTarget
      // get target id
      const id = $(target).attr('id')

      const isEditing = $(target).hasClass('isEditing')

      const overlay = $('#status-overlay').hasClass('active')

      // active hover if overlay not active
      if (!overlay) {
        // active hover if not have class isEditing
        if (!isEditing) {
          $('.element-body').removeClass('hovered')

          // add border hovered to editor element
          $(`#${id}`).addClass('hovered')

          // initialize element body by data-id
          const elementBody = $('body').find(`.element-body[data-id="${id}"]`)

          // remove editor element action
          $('.element-action').removeClass('active')

          // add class active on element action
          $(elementBody)
            .find('.element-action')
            .addClass('active')
        }
      }
    })
    .on('mouseleave', '.element-body', () => {
      // remove border hovered from editor element
      $('.element-body').removeClass('hovered')

      // remove editor element action
      $('.element-action').removeClass('active')
    })
}

export default Builder
