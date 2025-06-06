package main

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	cors "github.com/rs/cors/wrapper/gin"
)

type hobit struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Age      int    `json:"age"`
	Mood     string `json:"mood"`
	FootSize string `json:"footSize"`
	Liveness bool   `json:"liveness"`
}

var hobits = []hobit{
	{ID: "1", Name: "Frodo", Age: 53, Mood: "Happy", FootSize: "13 inches", Liveness: true},
	{ID: "2", Name: "Sam", Age: 34, Mood: "Sad", FootSize: "12 inches", Liveness: true},
	{ID: "3", Name: "Falco Gamgee", Age: 76, Mood: "Happy", FootSize: "14 inches", Liveness: false},
}

func getHobits(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, hobits)
}

func getHobitByID(c *gin.Context) {
	id := c.Param("id")
	for _, h := range hobits {
		if h.ID == id {
			c.IndentedJSON(http.StatusOK, h)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Hobit not found"})
}

func postHobits(c *gin.Context) {
	var newHobit hobit

	if err := c.Bind(&newHobit); err != nil {
		fmt.Println(err)
		return
	}

	newHobit.Liveness = false
	newHobit.ID = strconv.Itoa(len(hobits) + 1)

	hobits = append(hobits, newHobit)
	c.IndentedJSON(http.StatusCreated, newHobit)
}

func main() {
	router := gin.Default()
	router.Use(cors.Default()) // #FIXME remove me?
	router.GET("/hobits", getHobits)
	router.GET("/hobits/:id", getHobitByID)
	router.POST("/hobits", postHobits)

	router.Run("localhost:8080")
}
