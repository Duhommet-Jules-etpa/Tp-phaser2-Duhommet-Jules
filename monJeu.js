var config = {

		type: Phaser.AUTO,
		width: 800,
		height: 600,
	physics: {
	        default: 'arcade',
	        arcade: {
	            gravity: { y: 0 },
	            debug: false
	        }
	    },
	scene: {
			preload: preload,
			create: create,
			update: update
		}
	};

	var game = new Phaser.Game(config);
	var platforms;
	var player;
	var cursors;
	var bat;
	var bat2;
	var bat3;
	var bat4;
	var zombi;
	var zombi2;
	var zombi3;
	var pv = 3;
	var lv = 1;
	var bbqPic;
	var bbqPic2;
	var pvtext;
	var lvtext;
	var moula;
	var rib = 0;
	var ribtext;
	var phase2;
	var main;
	var main2;
	var main3;
	var supersayen;
	var supersayen2;
  var porte;

	function preload(){
		this.load.image('background','assets/background2.png');
		this.load.image('piece','assets/gemme.png');
		this.load.image('sol','assets/3.png');
		this.load.image('sol2','assets/4.png');
		this.load.image('portes','assets/door.png');
		this.load.image('sol4','assets/6.png');
		this.load.image('sol5','assets/5.png');
		this.load.image('sol4','assets/6.png');
		this.load.spritesheet('perso','assets/personnage.png',{frameWidth: 32, frameHeight: 32});
		this.load.spritesheet('bate','assets/main.png',{frameWidth: 32, frameHeight: 32});
		this.load.image('zombie','assets/dragon1.png');
    this.load.image('hand','assets/arbre chelou.png');
		this.load.image('pic','assets/medaillon.png');
		this.load.image('pic2','assets/cape.png');
		this.load.spritesheet('supersayen','assets/oeil.png',{frameWidth: 64, frameHeight: 64});
		this.load.spritesheet('supersayen2','assets/transformation.png',{frameWidth: 64, frameHeight: 80});

	}




	function create(){
		this.add.image(400,300,'background');

		platforms = this.physics.add.staticGroup();
		// barre horyzontale du haut

		platforms.create(60,20,'sol4');
		platforms.create(100,20,'sol4');
		platforms.create(140,-10,'sol4');
		platforms.create(180,20,'sol4');
		platforms.create(220,20,'sol4');
		platforms.create(260,20,'sol4');
		platforms.create(300,20,'sol4');
		platforms.create(340,-10,'sol4');
		platforms.create(380,20,'sol4');
		platforms.create(420,20,'sol4');
		platforms.create(460,20,'sol4');
		platforms.create(500,20,'sol4');
		platforms.create(520,20,'sol4');


		platforms.create(820,-10,'sol4');
		platforms.create(780,-10,'sol4');
		platforms.create(740,-10,'sol4');
		platforms.create(700,-10,'sol4');
		platforms.create(660,-10,'sol4');
		platforms.create(620,-10,'sol4');
		platforms.create(580,-10,'sol4');
		platforms.create(540,-10,'sol4');
		platforms.create(500,-10,'sol4');
		platforms.create(460,-10,'sol4');
		platforms.create(420,-10,'sol4');
		platforms.create(380,-10,'sol4');
		platforms.create(340,-10,'sol4');
		platforms.create(300,-10,'sol4');
		platforms.create(260,-10,'sol4');
		platforms.create(220,-10,'sol4');
		platforms.create(180,-10,'sol4');
		platforms.create(140,-10,'sol4');

		// barre varticale du droite max

		platforms.create(520,60,'sol4');
		platforms.create(520,100,'sol4');
		platforms.create(520,140,'sol4');
		platforms.create(550,180,'sol4');
		platforms.create(550,220,'sol4');
		platforms.create(520,260,'sol4');
		platforms.create(550,300,'sol4');
		platforms.create(520,340,'sol4');

		// barre varticale du gauche
		platforms.create(60,500,'sol4');
		platforms.create(60,460,'sol4');
		platforms.create(60,380,'sol4');
		platforms.create(60,420,'sol4');
		platforms.create(60,340,'sol4');
		platforms.create(60,300,'sol4');
		platforms.create(60,260,'sol4');

		// barre varticale du gauche
		platforms.create(160,420,'sol4');
		platforms.create(160,460,'sol4');
		platforms.create(160,380,'sol4');





		// barre varticale du droite

		platforms.create(420,260,'sol4');
		platforms.create(420,220,'sol4');
		platforms.create(420,180,'sol4');
		platforms.create(420,140,'sol4');

		// barre horyzontale du bas milieu

		platforms.create(60,100,'sol4');
		platforms.create(100,100,'sol4');
		platforms.create(140,100,'sol4');
		platforms.create(180,100,'sol4');
		platforms.create(220,140,'sol4');
		platforms.create(260,100,'sol4');
		platforms.create(300,100,'sol4');
		platforms.create(340,100,'sol4');
		platforms.create(380,100,'sol4');


		// barre horyzontale du bas milieu bas

		platforms.create(420,260,'sol4');
		platforms.create(380,260,'sol4');
		platforms.create(340,220,'sol4');
		platforms.create(300,260,'sol4');
		platforms.create(260,220,'sol4');
		platforms.create(220,260,'sol4');
		platforms.create(180,260,'sol4');
		platforms.create(100,260,'sol4');
		platforms.create(60,260,'sol4');


		// vertaivalte milieu
		platforms.create(100,220,'sol4');
		platforms.create(100,180,'sol4');
		platforms.create(100,140,'sol4');
		platforms.create(100,120,'sol4');

 // barre horyzontale du bas
  platforms.create(520,350,'sol');
  platforms.create(470,350,'sol2');
  platforms.create(420,350,'sol4');
  platforms.create(370,350,'sol');
  platforms.create(320,350,'sol');
	platforms.create(270,350,'sol4');
	platforms.create(220,350,'sol');
	platforms.create(170,350,'sol2');


	// barre horyzontale du bas
	 platforms.create(520,460,'sol');
	 platforms.create(470,460,'sol2');
	 platforms.create(420,460,'sol4');
	 platforms.create(370,460,'sol');
	 platforms.create(320,460,'sol');
	 platforms.create(270,460,'sol4');
	 platforms.create(220,460,'sol');
	 platforms.create(170,460,'sol2');



	// barre horyzontale du bas bas

	platforms.create(720,540,'sol');
	platforms.create(670,540,'sol');
	 platforms.create(620,540,'sol');
	 platforms.create(570,580,'sol');
	 platforms.create(520,540,'sol');
	 platforms.create(470,540,'sol2');
	 platforms.create(420,580,'sol4');
	 platforms.create(370,540,'sol');
	 platforms.create(320,540,'sol');
	 platforms.create(270,540,'sol4');
	 platforms.create(220,580,'sol');
	 platforms.create(170,540,'sol2');
	 platforms.create(120,540,'sol2');
	 platforms.create(70,540,'sol2');

	 platforms.create(820,580,'sol');
	 platforms.create(760,580,'sol');
	 platforms.create(720,580,'sol');
 	platforms.create(670,580,'sol');
 	 platforms.create(620,580,'sol');
 	 platforms.create(570,580,'sol');
 	 platforms.create(520,580,'sol');
 	 platforms.create(470,580,'sol2');
 	 platforms.create(420,580,'sol4');
 	 platforms.create(370,580,'sol');
 	 platforms.create(320,580,'sol');
 	 platforms.create(270,580,'sol4');
 	 platforms.create(220,580,'sol');
 	 platforms.create(170,580,'sol2');
 	 platforms.create(120,580,'sol2');
 	 platforms.create(70,580,'sol2');
	 platforms.create(20,580,'sol2');



	 platforms.create(20,540,'sol4');
	 platforms.create(20,500,'sol4');
	 platforms.create(20,460,'sol4');
	 platforms.create(20,380,'sol4');
	 platforms.create(20,420,'sol4');
	 platforms.create(20,340,'sol4');
	 platforms.create(20,300,'sol4');
	 platforms.create(20,260,'sol4');
	 platforms.create(20,220,'sol4');
	 platforms.create(20,180,'sol4');
	 platforms.create(20,140,'sol4');
	 platforms.create(20,100,'sol4');
	 platforms.create(20,60,'sol4');
	 platforms.create(20,20,'sol4');

	 // barre varticale du droit max
	 platforms.create(720,540,'sol4');
	 platforms.create(720,500,'sol4');
	 platforms.create(720,460,'sol4');
	 platforms.create(720,380,'sol4');
	 platforms.create(720,420,'sol4');
	 platforms.create(720,340,'sol4');
	 platforms.create(720,300,'sol4');
	 platforms.create(720,260,'sol4');
	 platforms.create(720,220,'sol4');
	 platforms.create(720,180,'sol4');
	 platforms.create(720,140,'sol4');
	 platforms.create(720,100,'sol4');
	 platforms.create(720,60,'sol4');
	 platforms.create(720,20,'sol4');

	 platforms.create(750,540,'sol4');
	 platforms.create(750,500,'sol4');
	 platforms.create(750,460,'sol4');
	 platforms.create(750,380,'sol4');
	 platforms.create(750,420,'sol4');
	 platforms.create(750,340,'sol4');
	 platforms.create(750,300,'sol4');
	 platforms.create(750,260,'sol4');
	 platforms.create(750,220,'sol4');
	 platforms.create(750,180,'sol4');
	 platforms.create(750,140,'sol4');
	 platforms.create(750,100,'sol4');
	 platforms.create(750,60,'sol4');
	 platforms.create(750,20,'sol4');

	 platforms.create(780,540,'sol4');
	 platforms.create(780,500,'sol4');
	 platforms.create(780,460,'sol4');
	 platforms.create(780,380,'sol4');
	 platforms.create(780,420,'sol4');
	 platforms.create(780,340,'sol4');
	 platforms.create(780,300,'sol4');
	 platforms.create(780,260,'sol4');
	 platforms.create(780,220,'sol4');
	 platforms.create(780,180,'sol4');
	 platforms.create(780,140,'sol4');
	 platforms.create(780,100,'sol4');
	 platforms.create(780,60,'sol4');
	 platforms.create(780,20,'sol4');


		player = this.physics.add.sprite(60,60,'perso');
		player.setCollideWorldBounds(true);
		player.body.setGravityY(000);
		this.physics.add.collider(player,platforms);

		bat = this.physics.add.sprite(475,130,'bate');
		bat.body.setGravityY(000);
		this.physics.add.collider(player,bat,hitBat,null,this);
		this.physics.add.collider(player,bat,deadBat,null,this);
		bat.setImmovable(true);


		main= this.physics.add.sprite(600,450,'hand');
		main.body.setGravityY(000);
		this.physics.add.collider(player,main,hitMain,null,this);
		this.physics.add.collider(player,main,deadMain,null,this);
		main.setImmovable(true);

		main2= this.physics.add.sprite(620,450,'hand');
		main2.body.setGravityY(000);
		this.physics.add.collider(player,main2,hitMain,null,this);
		this.physics.add.collider(player,main2,deadMain,null,this);
		main2.setImmovable(true);

		main3= this.physics.add.sprite(640,450,'hand');
		main3.body.setGravityY(000);
		this.physics.add.collider(player,main3,hitMain3,null,this);
		this.physics.add.collider(player,main3,deadMain3,null,this);
		main3.setImmovable(true);


		zombi = this.physics.add.sprite(150,500,'zombie');
		zombi.body.setGravityY(000);
		this.physics.add.collider(player,zombi,hitZombi,null,this);
		this.physics.add.collider(player,zombi,deadZombi,null,this);
		zombi.setImmovable(true);

		zombi2 = this.physics.add.sprite(150,180,'zombie');
		zombi2.body.setGravityY(000);
		this.physics.add.collider(player,zombi2,hitZombi2,null,this);
		this.physics.add.collider(player,zombi2,deadZombi2,null,this);
		zombi2.setImmovable(true);



		bbqPic = this.physics.add.image(385,220,'pic');
		this.physics.add.overlap(player,bbqPic,collectItem,false,this);


		bbqPic2 = this.physics.add.image(220,420,'pic2');
		this.physics.add.overlap(player,bbqPic2,collectItem2,false,this);


		var back = this.add.image(500,500,).setOrigin(0);
		        this.cameras.main.setBounds(0, 0, 1000 * 2, 1000 * 2);
		        this.physics.world.setBounds(0, 0, 1000 * 2, 1000 * 2);
		        this.cameras.main.startFollow(player,true,1,1,0,0);

		cursors = this.input.keyboard.createCursorKeys();

		this.anims.create({
		        key:'supersayen',
						frames: this.anims.generateFrameNumbers('supersayen', {start: 0, end: 18}),
				 		frameRate: 5,
				 		repeat: -1
		    });

						this.anims.create({
						        key:'rightsup',
										frames: this.anims.generateFrameNumbers('supersayen2', {start:6, end: 10}),
								 		frameRate: 10,
								 		repeat: -1
						    });

								this.anims.create({
						key:'leftsup',
						frames: this.anims.generateFrameNumbers('supersayen2', {start: 6, end: 10}),
						frameRate: 10,
						repeat: -1
					});

			this.anims.create({
				key:'bassup',
				frames: this.anims.generateFrameNumbers('supersayen2', {start: 0, end: 5}),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key:'topsup',
				frames: this.anims.generateFrameNumbers('supersayen2', {start: 11, end: 13}),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key:'stopsup',
				frames: this.anims.generateFrameNumbers('supersayen2', {start:6, end: 10}),
				frameRate: 20
			});

	        this.anims.create({
			key:'left',
			frames: this.anims.generateFrameNumbers('perso', {start: 0, end: 4}),
			frameRate: 10,
			repeat: -1
		});


			        this.anims.create({
					key:'right',
					frames: this.anims.generateFrameNumbers('perso', {start: 0, end: 4}),
					frameRate: 10,
					repeat: -1
				});

		this.anims.create({
			key:'bas',
			frames: this.anims.generateFrameNumbers('perso', {start: 5, end: 9}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key:'top',
			frames: this.anims.generateFrameNumbers('perso', {start: 10, end: 14}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key:'stop',
			frames: [{key: 'perso', frame:0}],
			frameRate: 20
		});




		this.tweens.add({
		          targets: bat,
							y: 250,
		          duration: 4000,
		          ease: 'Power2',
		          yoyo: true,
		          delay: 1500,
		          repeat: -1,
							flipX:true
						});

		this.tweens.add({
						  targets: bat2,
							y: 570,
						  duration: 4000,
						  ease: 'Power2',
						  yoyo: true,
						  delay: 1500,
					    repeat: -1
						});

		this.tweens.add({
						  targets: bat3,
							y: 180,
						  duration: 2000,
						  ease: 'Power2',
						  yoyo: true,
						  delay: 1500,
						  repeat: -1
						});

		this.tweens.add({
							targets: bat4,
							y: 500,
							duration: 2000,
							ease: 'Power2',
							yoyo: true,
							delay: 1500,
							repeat: -1
						});


		this.tweens.add({
							targets: main,
							y: 50,
							duration: 2000,
							ease: 'Power2',
							yoyo: true,
							delay: 1500,
							repeat: -1
						});

								this.tweens.add({
													targets: main2,
													y: 50,
													duration: 3500,
													ease: 'Power2',
													yoyo: true,
													delay: 1500,
													repeat: -1
												});


														this.tweens.add({
																			targets: main3,
																			y: 50,
																			duration: 2500,
																			ease: 'Power2',
																			yoyo: true,
																			delay: 1500,
																			repeat: -1
																		});



		this.tweens.add({
							targets: zombi,
							x: 600,
							duration: 3500,
							ease: 'Power2',
							yoyo: true,
							delay: 1500,
							flipX: true,
							repeat: -1
						});

		this.tweens.add({
							targets: zombi2,
							x: 390,
							duration: 2600,
							ease: 'Power2',
							yoyo: true,
							delay: 1500,
							flipX: true,
							repeat: -1
						});

		this.tweens.add({
							targets: zombi3,
							y: 180,
							duration: 1800,
							ease: 'Power2',
							yoyo: true,
							delay: 1500,
							flipX: true,
							repeat: -1
						});


		pvtext = this.add.text(680,50, 'pv: 3', {fontSize: '30px', fill:'#FFF'});
		lvtext = this.add.text(680,25, 'lv: 1', {fontSize: '30px', fill:'#FFF'});
		ribtext = this.add.text(680,0, 'rib: 0', {fontSize: '30px', fill:'#FFF'});

	}


	function update(){
		if(lv == 1){

		if(cursors.left.isDown){
			player.anims.play('left', true);
			player.setVelocityX(-80);
			player.setFlipX(true);
		}else if(cursors.right.isDown){
			player.setVelocityX(80);
			player.anims.play('right', true);
			player.setFlipX(false);
		}else if(cursors.up.isDown){
				player.anims.play('top', true);
				player.setVelocityY(-80);
		}else if(cursors.down.isDown){
				player.anims.play('bas', true);
				player.setVelocityY(80);
		}else{
			player.anims.play('stop', true);
			player.setVelocityX(0);
			player.setVelocityY(0);
		}
		if(lv == 3){
	    if (pv == 2){
	        pvtext.setText('pv: '+pv);
	    }
	    else if (pv == 1){
	        pvtext.setText('pv: '+pv);
	    }
	    else if (pv == 0){
	    pvtext.setText('pv: '+pv);
	        this.physics.pause();
	        player.setTint(0xff0000);
	        player.anims.play('turn');
	        gameOver = true;
	        pv = 3;
	    }
	}
}
	   if(lv ==2){
		player.anims.play('supersayen', true);
		if(cursors.left.isDown){
			player.setVelocityX(-200);
			player.setFlipX(true);
		}else if(cursors.right.isDown){
			player.anims.play('supersayen', true);
			player.setVelocityX(200);
			player.setFlipX(false);
		}else if(cursors.up.isDown){
			player.anims.play('supersayen', true);
				player.setVelocityY(-200)
		}else if(cursors.down.isDown){
			player.anims.play('supersayen', true);
				player.setVelocityY(200);
		}
		else{
			player.anims.play('supersayen', true);
			player.setVelocityX(0);
			player.setVelocityY(0);
		}

	}


	if(lv ==3 ){
 player.anims.play('leftsup', true);
 if(cursors.left.isDown){
	 player.setVelocityX(-200);
	 player.setFlipX(false);
 }else if(cursors.right.isDown){
	 player.anims.play('rightsup', true);
	 player.setVelocityX(200);
	 player.setFlipX(true);
 }else if(cursors.up.isDown){
	 player.anims.play('topsup', true);
		 player.setVelocityY(-200)
 }else if(cursors.down.isDown){
	 player.anims.play('bassup', true);
		 player.setVelocityY(200);
 }
 else{
	 player.anims.play('stopsup', true);
	 player.setVelocityX(0);
	 player.setVelocityY(0);
 }

}
if (rib == 6) {
     porte = this.physics.add.image(610,60,'portes');
		 this.physics.add.collider(player,porte);

 }

}


	 function hitBat(player, bat){
	     pv --;
	 }

	function deadBat(player, bat){
		bat.destroy(true);
		moula = this.physics.add.group({ key: 'piece',setXY: {x:475,y:130,stepX:50} });
	          this.physics.add.overlap(player,moula,collectgold,false,this);
	}

	function hitBat2(player, bat2){
		pv --;
	}

	function deadBat2(player, bat2){
		bat2.destroy(true);
		moula = this.physics.add.group({ key: 'piece',setXY: {x:0,y:350,stepX:50} });
	          this.physics.add.overlap(player,moula,collectgold,false,this);
	}

	function hitBat3(player, bat3){
		pv --;
	}

	function deadBat3(player, bat3){
		bat3.destroy(true);
		moula = this.physics.add.group({ key: 'piece',setXY: {x:0,y:400,stepX:50} });
	          this.physics.add.overlap(player,moula,collectgold,false,this);
	}

	function hitBat4(player, bat4){
		pv --;
	}

	function deadBat4(player, bat4){
		bat4.destroy(true);
		moula = this.physics.add.group({ key: 'piece',setXY: {x:0,y:500,stepX:50} });
	          this.physics.add.overlap(player,moula,collectgold,false,this);
	}

	function hitZombi(player, zombi){
		pv --;
	}

	function deadZombi(player, zombi){
		zombi.destroy(true);
		moula = this.physics.add.group({ key: 'piece',setXY: {x:150,y:500,stepX:50} });
	          this.physics.add.overlap(player,moula,collectgold,false,this);
	}

	function hitZombi2(player, zombi2){
		pv --;
	}

	function deadZombi2(player, zombi2){
		zombi2.destroy(true);
		moula = this.physics.add.group({ key: 'piece',setXY: {x:150,y:180,stepX:50} });
	          this.physics.add.overlap(player,moula,collectgold,false,this);
	}

	function hitZombi3(player, zombi3){
		pv --;
	}

	function deadZombi3(player, zombi3){
		zombi3.destroy(true);
		moula = this.physics.add.group({ key: 'piece',setXY: {x:360,y:120,stepX:50} });
	          this.physics.add.overlap(player,moula,collectgold,false,this);
	}

         function hitMain(player,main){
          pv --;
        }

      function deadMain(player,main){
	main.destroy(true);
	coin = this.physics.add.group({ key: 'piece',setXY: {x:600,y:450,stepX:50} });
	 this.physics.add.overlap(player,coin,collectgold,false,this);
        }

				function hitMain2(player,main2){
		 		pv --;
		 	}

		 function deadMain2(player,main2){
		 main2.destroy(true);
		 coin = this.physics.add.group({ key: 'piece',setXY: {x:620,y:450,stepX:50} });
		 this.physics.add.overlap(player,coin,collectgold,false,this);
		 	}

			function hitMain3(player,main3){
	 		pv --;
	 	}

	 function deadMain3(player,main3){
	 main3.destroy(true);
	 coin = this.physics.add.group({ key: 'piece',setXY: {x:640,y:450,stepX:50} });
	 this.physics.add.overlap(player,coin,collectgold,false,this);
	 	}

	function collectItem(player, bbqPic){
		bbqPic.destroy(true);
		lv += 1;
		lvtext.setText('lv: ' + lv);
	}

	function collectItem2(player, bbqPic2){
		bbqPic2.destroy(true);
		lv += 1;
		lvtext.setText('lv: ' + lv);
	}

	function collectgold(player, moula){
		moula.destroy(true);
		rib += 1;
		ribtext.setText('rib: ' + rib);
	}
