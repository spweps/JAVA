package com.sw.Pocketbook.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;
@Entity
@Table(name="expenses")
public class PocketBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Size(min = 5, max = 200, message="Must be at least 5 letters")
    private String vendor;
    @NotNull
    @Size(min = 1, max = 200, message="Must have a value")
    private Integer amount;
    @NotNull
    @Size(min = 5, max = 200, message = "Item must be at least 5 letters")
    private String itemPurchased;
    @NotNull
    @Size(min = 10, max = 200, message = "Description must be 10 characters long")
    private String description;
   
    // This will not allow the createdAt column to be updated after creation
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    public PocketBook() {
    }
    public PocketBook(String vendor, String itemPurchased, Integer amount, String description) {
        this.vendor = vendor;
        this.itemPurchased = itemPurchased;
        this.amount = amount;
        this.description = description;
    }
    
    // other getters and setters removed for brevity
    public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getItemPurchased() {
		return itemPurchased;
	}
	public void setItemPurchased(String itemPurchased) {
		this.itemPurchased = itemPurchased;
	}
	@PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getVendor() {
		return vendor;
	}
	public void setVendor(String vendor) {
		this.vendor = vendor;
	}
	public Integer getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
    
}


public class PocketBook {

}
