import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import style from '../assets/module-css/footer.module.css'
const Footer = () => {
    return (
    <footer className={style.footer}>
  	 <div className={style.container}>
  	 	<div className={style.row}>
  	 		<div className={style.footercol}>
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="/">Home</a></li>
  	 				<li><a href="/service">About Us</a></li>
  	 				<li><a href="/">Privacy Policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={style.footercol}>
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="/">FAQ</a></li>
  	 				<li><a href="/">shipping</a></li>
  	 				<li><a href="/">returns</a></li>
  	 				<li><a href="/">order status</a></li>
  	 				<li><a href="/">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={style.footercol}>
  	 			<h4>Vehicle shop</h4>
  	 			<ul>
  	 				<li><a href="/">Car</a></li>
  	 				<li><a href="/">Plane</a></li>
  	 				<li><a href="/">Heli</a></li>
  	 				<li><a href="/">Military Jet</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={style.footercol}>
  	 			<h4>follow us</h4>
  	 			<div className={style.sociallinks}>
  	 				<a href="/"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="/"><i class="fab fa-twitter"></i></a>
  	 				<a href="/"><i class="fab fa-instagram"></i></a>
  	 				<a href="/"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    )
}

export default Footer