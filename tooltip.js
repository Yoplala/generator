
/* Sélectionner tous les éléments button */

class Tooltip {
	/*
	Applique le système de bulle d'infos sur les éléments
	@param {string} selector
	*/
	static bind (selector) { 
		document.querySelectorAll(selector).forEach(element => new Tooltip(element))
	}
	
	/*
	@param {HTMLElement} element
	*/
	constructor (element) {
		this.element = element
		this.title = element.getAttribute('title')
		this.tooltip = null
		this.element.addEventListener('mouseover', this.mouseOver.bind(this))
		this.element.addEventListener('mouseout', this.mouseOut.bind(this))
	}
	
	mouseOver () {
		let tooltip = this.createTooltip()
		let width = this.tooltip.offsetWidth
		let height = this.tooltip.offsetHeight
		let left = this.element.offsetWidth / 2 - width / 2 + this.element.getBoundingClientRect().left + document.documentElement.scrollLeft
		let top = this.element.getBoundingClientRect().top - height - 30 + document.documentElement.scrollTop
		tooltip.style.left = left + "px"
		tooltip.style.top = top + "px"
		tooltip.classList.add('visible')
	}
	
	mouseOut () {
			document.body.removeChild(this.tooltip)
			this.tooltip = null
	}
	
	
	/*
	Crée et injecte la bulle d'info dans le HTMLElement
	@returns {HTMLElement}
	*/
	createTooltip () {
		if (this.tooltip === null) {
			let tooltip = document.createElement('div')
			tooltip.innerHTML = this.title
			tooltip.classList.add('tooltip')
			document.body.appendChild(tooltip)
			this.tooltip = tooltip
		}
		
		return this.tooltip
	}
}

Tooltip.bind('button')

/* Sélectionner tous les éléments button */

class Tooltip {
	/*
	Applique le système de bulle d'infos sur les éléments
	@param {string} selector
	*/
	static bind (selector) { 
		document.querySelectorAll(selector).forEach(element => new Tooltip(element))
	}
	
	/*
	@param {HTMLElement} element
	*/
	constructor (element) {
		this.element = element
		this.title = element.getAttribute('title')
		this.tooltip = null
		this.element.addEventListener('mouseover', this.mouseOver.bind(this))
		this.element.addEventListener('mouseout', this.mouseOut.bind(this))
	}
	
	mouseOver () {
		let tooltip = this.createTooltip()
		let width = this.tooltip.offsetWidth
		let height = this.tooltip.offsetHeight
		let left = this.element.offsetWidth / 2 - width / 2 + this.element.getBoundingClientRect().left + document.documentElement.scrollLeft
		let top = this.element.getBoundingClientRect().top - height - 30 + document.documentElement.scrollTop
		tooltip.style.left = left + "px"
		tooltip.style.top = top + "px"
		tooltip.classList.add('visible')
	}
	
	mouseOut () {
			document.body.removeChild(this.tooltip)
			this.tooltip = null
	}
	
	
	/*
	Crée et injecte la bulle d'info dans le HTMLElement
	@returns {HTMLElement}
	*/
	createTooltip () {
		if (this.tooltip === null) {
			let tooltip = document.createElement('div')
			tooltip.innerHTML = this.title
			tooltip.classList.add('tooltip')
			document.body.appendChild(tooltip)
			this.tooltip = tooltip
		}
		
		return this.tooltip
	}
}

Tooltip.bind('button')

// class Tooltip
// méthode bind



// class Tooltip
// méthode bind
