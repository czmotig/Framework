﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Data.Entity
{
    /// <summary>
    /// Generic repository for mapping business (<typeparamref name="TBusiness"/>) object to entity (<typeparamref name="TEntity"/>).
    /// </summary>
    /// <typeparam name="TBusiness">Business type.</typeparam>
    /// <typeparam name="TEntity">Entity (db) type.</typeparam>
    /// <typeparam name="TContext">DbContext used for storing objects.</typeparam>
    public class MappingEntityRepository<TBusiness, TEntity, TKey, TContext> : IRepository<TBusiness, TKey>
        where TEntity : class, TBusiness
        where TBusiness : class, IKey<TKey>, IVersion
        where TContext : IDbContext
    {

        /// <summary>
        /// Current dbContext.
        /// </summary>
        public TContext DbContext { get; protected set; }

        public MappingEntityRepository(TContext dbContext)
        {
            if (dbContext == null)
                throw new ArgumentNullException("dbContext");

            DbContext = dbContext;
        }

        /// <summary>
        /// Saves changes on db context.
        /// </summary>
        protected virtual void SaveChanges()
        {
            DbContext.SaveChanges();
        }

        /// <summary>
        /// Checks whether passed <paramref name="input"/> is of type <typeparamref name="TEntity"/>.
        /// </summary>
        /// <param name="input">Input object.</param>
        /// <returns><code>true</code> if <paramref name="input"/> is of type <typeparamref name="TEntity"/>.</returns>
        protected TEntity CheckMapping(TBusiness input)
        {
            TEntity entity = input as TEntity;
            if (entity == null)
                throw new MappingEntityException(typeof(TBusiness), typeof(TEntity));

            return entity;
        }

        #region Get/Insert/Update/Delete

        /// <summary>
        /// Finds single result by <paramref name="key"/>.
        /// </summary>
        /// <param name="key">Entity key.</param>
        /// <returns>Single object or null.</returns>
        public virtual TBusiness Get(TKey key)
        {
            if (key == null)
                throw new ArgumentNullException("key");

            return DbContext.Set<TEntity>().Find(key);
        }

        /// <summary>
        /// Inserts new item to repository.
        /// </summary>
        /// <param name="item">New item.</param>
        public virtual void Insert(TBusiness item)
        {
            if (item == null)
                throw new ArgumentNullException("item");

            DbContext.Set<TEntity>().Add(CheckMapping(item));
            SaveChanges();
        }

        /// <summary>
        /// Updates existing item in repository.
        /// </summary>
        /// <param name="item">Item to update.</param>
        public virtual void Update(TBusiness item)
        {
            if (item == null)
                throw new ArgumentNullException("item");

            TEntity entity = CheckMapping(item);
            DbContext.Set<TEntity>().Attach(entity);
            DbContext.Entry<TEntity>(entity).State = EntityState.Modified;
            SaveChanges();
        }

        /// <summary>
        /// Deletes item from repository.
        /// </summary>
        /// <param name="item">Item to delete.</param>
        public virtual void Delete(TBusiness item)
        {
            if (item == null)
                throw new ArgumentNullException("item");

            DbContext.Set<TEntity>().Remove(CheckMapping(item));
            SaveChanges();
        }

        #endregion
    }

    public class MappingEntityRepository<TBusiness, TEntity, TContext> : MappingEntityRepository<TBusiness, TEntity, int, TContext>, IRepository<TBusiness>
        where TEntity : class, TBusiness
        where TBusiness : class, IKey<int>, IVersion
        where TContext : IDbContext
    {
        public MappingEntityRepository(TContext dbContext)
            : base(dbContext)
        { }

        public override TBusiness Get(int key)
        {
            //if (key == null)
            //    throw new ArgumentNullException("key");

            return DbContext.Set<TEntity>().Find(key);
        }
    }
}
