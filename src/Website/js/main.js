// function boot_slider(slider_id)
// {
// 	let target = document.querySelector(".boot-carousel");
// 	let carousel_item = target.querySelectorAll(".carousel-inner .carousel-item");
// 	let prev = ` <button class="carousel-control-prev" type="button" data-bs-target="#${slider_id}" data-bs-slide="prev">
// 				    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
// 				    <span class="visually-hidden">Previous</span>
// 				  </button>`;
// 	let next = `<button class="carousel-control-next" type="button" data-bs-target="#${slider_id}" data-bs-slide="next">
// 			    <span class="carousel-control-next-icon" aria-hidden="true"></span>
// 			    <span class="visually-hidden">Next</span>
// 			  </button>`;			  
// 	carousel_item[0].classList.add("active");
// 	target.insertAdjacentHTML("beforeend",prev);
// 	target.insertAdjacentHTML("beforeend",next);
// }

// function hover_pause_false(slider_ids)
// {
// 	let myCarousel = document.querySelector("#"+slider_ids)
// 	let carousel = new bootstrap.Carousel(myCarousel, {
// 	  pause: false
// 	})
// }


//===============================================

const my_custom_accordion = (accordion__id) =>
{	
	const target_id = document.querySelector("#"+accordion__id);
	const accordion_block = target_id.querySelectorAll(".accordion-block");
	let i;

	for(i = 0; i < accordion_block.length; i++)
	{
		accordion_block[i].querySelector(".header-accordion").addEventListener("click",function(){

			accordion_block.forEach(function(events){
				events.setAttribute("show-accordion-body","false");
				events.children[0].children[1].innerHTML = "+";
			});

			if(this.parentElement.getAttribute("show-accordion-body") == "true")
			{
				this.parentElement.setAttribute("show-accordion-body","false");
				this.children[1].innerHTML = "+";
			}
			else
			{
				this.parentElement.setAttribute("show-accordion-body","true");
				this.children[1].innerHTML = "-";
			}
		});
	}
}

// =========================================

const filter_gallery = (filterID) =>
{
	let targetid = document.querySelector("#"+filterID+" .filter_button_container");
	let anchors1 = targetid.querySelectorAll("a");
	let all_image = document.querySelectorAll("#"+filterID+" .work_block_row .work-block-colom");
	let i,j;

	for(i = 0; i < anchors1.length; i++)
	{
		anchors1[i].addEventListener("click",function(){
			let current_click_Attr = this.getAttribute("anchor-class");
			anchors1.forEach(function(e){
				e.classList.remove("active");
			});
			this.classList.add("active");
			if(current_click_Attr == "all")
			{
					for(j= 0; j < all_image.length; j++)
					{
						all_image[j].style.display = "block";
					}
			}
			else
			{
				for(j= 0; j < all_image.length; j++)
				{
					let all__images = all_image[j];
					if(current_click_Attr == "all")
					{
						
					}
					if(all_image[j].classList.contains(current_click_Attr))
					{
						all_image[j].style.display = "block";
					}
					else
					{
						all_image[j].style.display = "none";
					}
				}
			}
			


		});	
	}

	
}

// =============================  full bootstrap 5 slider append 


const custom_select = () =>
{
	let target_div = document.querySelector(".custom_select");
	let display_text_cont = target_div.querySelector(".display_text");
	let display_text_cont_show_text = display_text_cont.querySelector("span");
	let display_text_cont_hide_value = display_text_cont.querySelector("#selected_service");
	let list_select_option = target_div.querySelector(".list_select_option");
	let list_select_option1 = list_select_option.querySelector("ul");
	let list_select_option_list = list_select_option1.querySelectorAll("li");
	let x;


	 display_text_cont.addEventListener("click",function(){
	 	if(list_select_option.classList.contains("show_list"))
	 	{
		 	list_select_option.classList.remove("show_list");
		 	display_text_cont.classList.remove("rotate_arrow");
	 	}
	 	else
	 	{
	 		list_select_option.classList.add("show_list");
		 	display_text_cont.classList.add("rotate_arrow");
	 	}
	 });

	for(x = 0; x < list_select_option_list.length; x++)
	{
		 list_select_option_list[x].querySelector("label").addEventListener("click",function(){
		 	let clicked_label = this;
		 	let gotValue = clicked_label.innerHTML;
		 	display_text_cont_show_text.innerHTML = gotValue;
		 	display_text_cont_hide_value.value = gotValue;
		 	list_select_option.classList.remove("show_list");
		 });
	}
}
// custom_select();

// ===========================


// const custom_filter_container = () =>
// {
// 	let main_container = document.querySelector(".custom_filter_container");
// 	let filter_button_container = main_container.querySelector(".filter_button_container");
// 	let all_anchor = filter_button_container.querySelectorAll("a");

// 	let work_block_row = document.querySelector(".work_block_row");
// 	let work_block_colom = work_block_row.querySelectorAll(".work-block-colom");

// 	let i,j;

// 	for(i = 0;i < all_anchor.length; i++)
// 	{
// 		all_anchor[i].addEventListener("click",function(e){
			
// 			anchor_1_attribute_val = this.getAttribute("anchor-class");

// 			document.querySelectorAll(".work_block_row .work-block-colom").forEach(function(eve){
// 				for(j = 0; j < work_block_colom.length; j++)
// 				{
// 					if(work_block_colom[j].getAttribute("data-filter") == eve)
// 					{
// 						console.log("hello");
// 					}
// 					else
// 					{
// 						console.log("not Hello");
// 					}
// 				}
// 			});

// 		});
// 	}

// }



/*
	B5 Nav tabs plills 
	
	first tab button  = aria-selected="true"
	first tab button  = active class
	other tab button  = aria-selected="false"

	first content area = show active class will add



	button ki id =  content ki aria-labelledby
	button ki data-bs-target == content ki id
	button ki aria-controls == content ki id
*/
