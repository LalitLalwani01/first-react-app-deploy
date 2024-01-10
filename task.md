        let blogData = await BlogModel.find();

        let newData = [];
        
        for (const eachObj of blogData) {
          let data = await UserModel.findById(eachObj.userId).lean();
        
          // Create a new object with the original data and additional userData
          newData.push({
            ...eachObj.toObject(), // Convert eachObj to a plain JavaScript object
            userData: data,
          });
        }
        res.send(newData)