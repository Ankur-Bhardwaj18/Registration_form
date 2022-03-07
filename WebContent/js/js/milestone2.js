Ext.onReady(function(){

    var panel1 = Ext.create('Ext.Panel', {
        fullscreen: true,
        width: 525,
        layout: 'hbox',
        height: 100,
        padding: 10,
        cls: 'panel-1',
		border: false,
        items: [{
                xtype: 'panel',
                html: '<h2>Hyderabad Readiness Program</h2>',
				flex: 7,
				height:100,
				bodyStyle:{"background-color":"#f2f2f2"},
            },
            {
                xtype: 'image',
                src: './js/js/unnamed.jpg',
				flex: 3,
				height: 70,
            }
        ],
    });
	
	var panel1Frame = Ext.create('Ext.panel.Panel', {
			border:true,
			bodyPadding:'5 5 5 10',
			items:[panel1]
	});

    var panel2 = Ext.create('Ext.form.Panel', {
        width: 525,
        bodyPadding: 10,
        height: 270,
		id: 'addform',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [
        {
            xtype: 'textfield',
            name: 'username',
            emptyText: 'Username',
            fieldLabel: 'Username',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            name: 'email',
            id: 'email',
            fieldLabel: 'Email',
			cls:'center',
            emptyText: 'Email Address',
            vtype: 'email',
            allowBlank: false,
/*            listeners: {
                'change': function (thisField) {

                    if (thisField.isValid()) {
                        this.setFieldStyle("background-color : #ffffff");
                    } else {
                        this.setFieldStyle("background-color : #F6CECE");
                    }
                }
            }
*/
        }, {
            xtype:'textfield',
            id: 'password',
            name: "password",
            emptyText: 'Password',
            fieldLabel: 'Password',
            validationEvent:"blur",
			cls:'center',
            inputType:"password",

        }, {
            xtype:'textfield',
            id: 'confirmpassword',
            name: "confirmpassword",
            fieldLabel: 'Confirm Password',
			cls:'center',
            validationEvent:"blur",
            emptyText: 'Confirm Password',
            inputType:"password",

            validator: function() {

                	var password = Ext.getCmp('password').getValue();
                	var confirmpassword = Ext.getCmp('confirmpassword').getValue();
                   console.log("pass 1 = " + password + "--pass 2 = " + confirmpassword);

                    if (password == confirmpassword){
                        this.setFieldStyle("background-color : #ffffff");
                        return true;
                    }
                    else {
						this.setFieldStyle("background-color : #F6CECE");
                        return "Passwords do not match!";
					}
            }
        },{
            xtype:'button',
            text    : 'REGISTER ME',
			cls: 'registerbtn',
			handler: function(){
			    var email = Ext.getCmp('email').isValid();
			    var password = Ext.getCmp('password').getValue();
                var confirmpassword = Ext.getCmp('confirmpassword').getValue();
				console.log(Ext.getCmp('addform').getValues());
                console.log(email +" pass 1 = " + password + "--> pass 2 = " + confirmpassword);
                if(email == false){
                    alert('Check your email Once');
                }
			    else if (password != confirmpassword) {
                    alert('Password and Confirm Password is not same please check it once');
                }else{
					Ext.Ajax.request({
                        url: 'http://localhost:8080/Registartion_Form/add',
                        method: "POST",
                        params: Ext.getCmp('addform').getValues(),
                        success: function (response) {
                                var obj = Ext.decode(response.responseText);
                                if (obj.status == true) {
                                    Ext.Msg.show({
									    title:'Successfully',
										cls: 'test',
									    message: obj.message,
										buttons: Ext.Msg.OK,
										fn: function(btn) {
									        if (btn === 'ok') {
									            panel2.getForm().reset();
									        }
									    }
									    
									});
                                } else {
                                    Ext.Msg.show({
									    title:'Error',
										cls: 'test',
									    message: obj.message,
										buttons: Ext.Msg.OKCANCEL,
									    fn: function(btn) {
									        if (btn === 'ok') {1
									            panel2.getForm().reset();
									        }else {
									            console.log('Cancel pressed');
									        }
									    }
									});
                                }
                            },
                            failure: function (response) {
                                Ext.toast({
                                    html: 'Something Went Wrong',
                                    title: 'Please try after some time',
                                    width: 200,
                                    align: 'bl',
                                    closable: true,
                                    timeout: 2000
                                });
                            }
                    });
				}
			}
        }],


    })
	
	var panel2Frame = Ext.create('Ext.panel.Panel', {
			border:true,
			bodyPadding:'5 5 90 10',
			items:[panel2]
		});
		
	Ext.create('Ext.container.Viewport', {
	//bodyStyle:{"background-color":"#FFFFFF"},
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: [panel1Frame, panel2Frame],
            renderTo: Ext.getBody(),
     })
})